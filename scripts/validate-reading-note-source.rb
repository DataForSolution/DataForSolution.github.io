require "yaml"
require "date"
require "uri"

root = File.expand_path("..", __dir__)
catalog = YAML.load_file(File.join(root, "_data/library.yml"))
allowed = %w[open_access public_domain publisher_free permission_granted]
notes = Dir[File.join(root, "_reading_notes", "*.md")]
raise "No reading notes" if notes.empty?

notes.each do |file|
  content = File.read(file)
  header, body = content.split(/^---\s*$/, 3)[1..2]
  raise "Missing front matter: #{file}" unless header && body
  data = YAML.safe_load(header, permitted_classes: [Date], aliases: true)
  %w[date summary source_book source_url source_citation keywords].each do |key|
    raise "Missing #{key} in #{file}" unless data[key]
  end
  book = catalog.fetch("open_books").find { |b| b["title"] == data["source_book"] }
  raise "Book not catalogued: #{file}" unless book
  raise "Unapproved rights in #{file}" unless allowed.include?(book["rights"])
  raise "No license in #{file}" if book["license"].to_s.empty?
  source = URI.parse(data["source_url"])
  authorized = URI.parse(book["read_url"])
  raise "Unauthorized source in #{file}" unless source.scheme == "https" && source.host == authorized.host
  raise "Local PDF link in #{file}" if body.match?(/\]\(\/[^)]*\.pdf\)/i)
  if Date.parse(data["date"].to_s) >= Date.new(2026, 9, 1)
    words = body.split(/\s+/).size
    raise "Unexpected word count #{words} in #{file}" unless (500..900).cover?(words)
  end
end

puts "Reading-note rights and source validation passed (#{notes.length} notes)."

#!/usr/bin/env ruby
# Verify a reading-note draft against the site's rights-aware catalog.
require "yaml"
require "date"
require "uri"

root = File.expand_path("..", __dir__)
relative = ARGV.fetch(0) { abort "Usage: ruby scripts/validate-reading-note-source.rb PATH" }
abort "Only _reading_notes/*.md is supported" unless relative.match?(%r{\A_reading_notes/[^/]+\.md\z})

path = File.join(root, relative)
content = File.read(path, encoding: "UTF-8")
parts = content.match(/\A---\s*\n(.*?)\n---\s*\n(.*)\z/m)
abort "Missing YAML front matter: #{relative}" unless parts
metadata = YAML.safe_load(parts[1], permitted_classes: [Date], aliases: false)
body = parts[2]
required = %w[layout title date summary source_book source_url source_citation keywords]
missing = required.reject { |field| metadata[field] && !metadata[field].to_s.strip.empty? }
abort "Missing front matter: #{missing.join(', ')}" unless missing.empty?
abort "Incorrect layout" unless metadata["layout"] == "reading-note"
abort "keywords must be a nonempty array" unless metadata["keywords"].is_a?(Array) && !metadata["keywords"].empty?

date = metadata["date"].is_a?(Date) ? metadata["date"] : Date.iso8601(metadata["date"].to_s)
abort "File date does not match front matter" unless File.basename(relative).start_with?(date.iso8601)

catalog = YAML.safe_load(File.read(File.join(root, "_data", "library.yml"), encoding: "UTF-8"), permitted_classes: [Date], aliases: false)
book = catalog.fetch("open_books").find { |entry| entry["title"] == metadata["source_book"] }
abort "Source book is not in the library catalog" unless book
allowed = %w[open_access public_domain publisher_free permission_granted]
abort "Source rights are not authorized" unless allowed.include?(book["rights"])
abort "Source license is missing" if book["license"].to_s.strip.empty?

source = URI.parse(metadata["source_url"].to_s)
catalog_source = URI.parse(book.fetch("read_url"))
abort "Source must be a HTTPS URL" unless source.is_a?(URI::HTTPS)
abort "Source host differs from verified catalog host" unless source.host == catalog_source.host
abort "Reading note must link the authorized source in its body" unless body.include?(metadata["source_url"])
abort "Local PDF linking is prohibited" if body.match?(%r{\]\((?:/|\./)[^)]*\.pdf(?:[?#][^)]*)?\)}i)

words = body.scan(/\b[[:alnum:]]+(?:[-'][[:alnum:]]+)*\b/).length
abort "Word count #{words} is outside 500..900" unless (500..900).cover?(words)
abort "Missing reflection question" unless body.match?(/^## Reflection question\s*$/i)
abort "Missing applied exercise" unless body.match?(/^## A practical exercise/i)
puts "READING_NOTE_SOURCE_CHECK=PASS"
puts "RIGHTS=#{book["rights"]} LICENSE=#{book["license"]}"
puts "WORDS=#{words} SOURCE_HOST=#{source.host}"

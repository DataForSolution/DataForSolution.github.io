source "https://rubygems.org"

# Use GitHub Pages gem for compatibility
gem "github-pages", group: :jekyll_plugins

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` for JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

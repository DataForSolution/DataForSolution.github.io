source "https://rubygems.org"

# Use GitHub Pages gem for compatibility
gem "github-pages", group: :jekyll_plugins

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"        # RSS feed generation
  gem "jekyll-seo-tag", "~> 2.7"     # SEO improvements
  gem "jekyll-paginate", "~> 1.1"    # Pagination support
  gem "jekyll-sitemap", "~> 1.4"     # Automatically generate a sitemap
  gem "jekyll-include-cache", "~> 0.2" # Cache includes for performance
  gem "jekyll-assets", "~> 3.0"      # Asset management for CSS, JS, and images
end

# Windows and JRuby dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` for JRuby builds
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

# Explicitly specify the `public_suffix` gem to resolve conflicts
gem "public_suffix", ">= 5.1.1", "< 7.0"

# Performance optimization
gem "jekyll-include-cache", "~> 0.2.0"

$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "stop_ie/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "stop_ie"
  s.version     = StopIe::VERSION
  s.authors     = ["Evgeny Lapin"]
  s.email       = ["lev@openteam.ru"]
  s.homepage    = "https://github.com/openteam/stop_ie"
  s.summary     = "Summary of StopIe."
  s.description = "Description of StopIe."

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]

  s.add_dependency "rails"
  # s.add_dependency "jquery-rails"

  s.add_development_dependency "sass-rails"
end

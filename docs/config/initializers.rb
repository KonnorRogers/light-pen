Bridgetown.configure do |config|
  init :"bridgetown-quick-search"


  url ENV.fetch("URL", "https://konnorrogers.github.io")
  base_path ENV.fetch("BASE_PATH", "/light-pen)"
end

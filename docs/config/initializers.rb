Bridgetown.configure do |config|
  init :"bridgetown-quick-search"

  config.url = ENV.fetch("URL", "https://konnorrogers.github.io")
  config.base_path = ENV.fetch("BASE_PATH", "/light-pen")
  config.base_url = config.url + config.base_path
end

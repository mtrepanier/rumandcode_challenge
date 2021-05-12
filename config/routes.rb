Rails.application.routes.draw do
  root 'super_heros#index'
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :super_heros
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

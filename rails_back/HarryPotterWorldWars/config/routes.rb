Rails.application.routes.draw do
  resources :character_spells
  resources :characters
  resources :spells
  resources :houses
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

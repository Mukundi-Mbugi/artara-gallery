Rails.application.routes.draw do
  
  resources :exhibitions, only: [:index]
  post '/signup', to: 'artists#create'
  get '/me', to: 'artists#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/items', to: 'items#index'
  post '/items', to: 'items#create'
  update '/items/:id', to: 'items#update'
  delete '/items/:id', to: 'items#destroy'
  get '/artists', to: 'artists#index'
  get '/exhibitions', to: 'exhibitions#index'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

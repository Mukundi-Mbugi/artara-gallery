Rails.application.routes.draw do
  
  post '/signup', to: 'artists#create'
  get '/me', to: 'artists#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/items', to: 'items#index'
  post '/items', to: 'items#create'
  delete '/items', to: 'items#destroy'
  get '/artists', to: 'artists#index'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

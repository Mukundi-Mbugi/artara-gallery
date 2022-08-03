class ArtistsController < ApplicationController
    def create
        artist = Artist.create(artist_params)
        if artist.valid?
            session[:artist_id] = artist.id
            render json: artist, status: :created
        else
            render json: { errors: artist.errors.full_messages }, status: :unprocessable_entity
        end
    end
  
    def index
      render json: Artist.all, only: [:id, :name, :email]
    end
    
    def show
        render json: @current_artist
    end
  
    private
  
    def artist_params
        params.permit(:name,:email, :password, :password_confirmation)
    end
end

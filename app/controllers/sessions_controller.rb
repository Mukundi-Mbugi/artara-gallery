class SessionsController < ApplicationController
    def create
        artist = Artist.find_by(name: params[:name])
        session[:artist_id] = artist.id
        render json: artist
    end

    def destroy
        session.delete :artist_id
        head :no_content
    end
end

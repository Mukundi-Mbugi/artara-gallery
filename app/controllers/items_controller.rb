class ItemsController < ApplicationController
    def index
        render json: Item.all, only: [:id, :title, :image_url, :description]
    end
   
    def create 
        item = @current_artist.items.create!(item_params)
        render json: item, include: [:artist], status: :created
    end

    private
    def item_params
        params.permit(:title, :image_url, :description)
    end
end

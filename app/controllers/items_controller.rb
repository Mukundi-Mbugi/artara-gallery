class ItemsController < ApplicationController
    def index
        render json: Item.all, only: [:id, :title, :image_url, :description]
    end
   
    def create 
        item = Item.create!(item_params)
        render json: item, include: [:artist], status: :created
    end
    def update
        item = Item.find(params[:id])
        @current_artist.items.update!(item_params)
        render json: item, include: [:artist], status: :updated
    end
    def destroy
        item = Item.find(params[:id])
        item.destroy
        head :no_content
    end

    private
    def item_params
        params.permit(:title, :image_url, :description, :artist_id)
    end
end

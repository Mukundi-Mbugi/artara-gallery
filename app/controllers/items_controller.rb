class ItemsController < ApplicationController
    def index
        render json: Item.all, only: [:id, :title, :image_url, :description]
    end
   
    def create 
        item = Item.create(title: params[:title], image_url: params[:image_url], description: params[:description])
        render json: item, status: :created
    end
    def update
        item = Item.find(params[:id])
        item.update(item_params)
        render json: item
    end
    def destroy
        item = Item.find(params[:id])
        item.destroy
        head :no_content
    end

    private
    def item_params
        params.require(:item).permit(:title, :image_url, :description)
    end
end

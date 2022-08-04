class ExhibitionsController < ApplicationController
    def index
        render json: Exhibition.all
    end
    def create
        exhibition = Exhibition.create(exhibition_params)
        render json: exhibition
    end

    private
    def exhibition_params
        params.permit(:title, :venue, :date, :time)
    end
end

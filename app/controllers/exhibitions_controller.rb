class ExhibitionsController < ApplicationController
    def index
        render json: Exhibition.all
    end
end

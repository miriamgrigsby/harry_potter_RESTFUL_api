class HousesController < ApplicationController

    def index
        render json: House.all
    end
    
    def show 
        @house = House.find(params[:id])
        render json: @house, include: [characters: {include: :spells}]
    end 

end

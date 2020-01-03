class HousesController < ApplicationController

    # before_action :find_house, only: [:show, :update, :destroy]

    def index
        render json: House.all
    end
    
    def show 
        @house = House.find(params[:id])
        render json: @house, include: [characters: {include: :spells}]
    end 



    # def destroy
    #     @house.destroy
    # end 

    # private 

    # def find_house 
    #     @house = House.find(params[:id])
    # end 
end

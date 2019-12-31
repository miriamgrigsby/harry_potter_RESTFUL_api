class CharactersController < ApplicationController
    
    before_action :find_character, only: [:show, :update, :destroy]

    def index
        render json: Character.all, include:[:house]
    end
    
    def show 
        render json: @character, include:[:house]
    end

    private 

    def find_character 
        @character = Character.find(params[:id])
    end 

end

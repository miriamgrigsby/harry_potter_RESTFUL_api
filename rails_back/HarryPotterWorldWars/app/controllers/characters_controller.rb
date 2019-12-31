class CharactersController < ApplicationController
    
    before_action :find_character, only: [:show, :update, :destroy]

    def index
        render json: Character.all, include:[:house, character_spells: {include: :spell}]
        
    end
    
    def show 
        render json: @character, include:[:house, character_spells: {include: :spell}]
    end

    def create
        @character = Character.new(character_params)
        if @character.valid?
            @character.save
        else 
        end
        redirect_to ("http://localhost:3001")
    end


    def update
        if @character.update(charcter_params)
            render json: @character
        else
            render json: @character.errors, status: :unprocessable_entity
        end
    end

    def destroy 
        @character.delete
    end

    private 

    def find_character 
        @character = Character.find(params[:id])
    end 

    def character_params
        params.permit(
            :name, 
            :ancestry, 
            :house_id,
            :spell_id
        )
    end
end

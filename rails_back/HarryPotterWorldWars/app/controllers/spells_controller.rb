class SpellsController < ApplicationController
    def index
        render json: Spell.all
    end
    
    def show
        spell = Spell.find(params[:id])
        render json: spell
    end
end

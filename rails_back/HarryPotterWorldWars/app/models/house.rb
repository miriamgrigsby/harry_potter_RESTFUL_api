class House < ApplicationRecord
    has_many :characters, dependent: :destroy
end

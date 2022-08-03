class Item < ApplicationRecord
    belongs_to :artist
    validates :title, presence: true
    validates :description, presence: true
    validates :image_url, presence: true
end

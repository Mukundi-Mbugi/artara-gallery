class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :artist_id
end

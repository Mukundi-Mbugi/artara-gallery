class ExhibitionSerializer < ActiveModel::Serializer
  attributes :id, :name, :venue, :date, :time
end

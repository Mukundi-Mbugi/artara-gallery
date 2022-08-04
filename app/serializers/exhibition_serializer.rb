class ExhibitionSerializer < ActiveModel::Serializer
  attributes :id, :title, :venue, :date, :time
end

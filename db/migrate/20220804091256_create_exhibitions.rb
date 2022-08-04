class CreateExhibitions < ActiveRecord::Migration[6.1]
  def change
    create_table :exhibitions do |t|
      t.string :name
      t.string :venue
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end

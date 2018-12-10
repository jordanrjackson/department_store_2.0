class AddDepartmentIdToItem < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :department_id, :bigint
  end
end

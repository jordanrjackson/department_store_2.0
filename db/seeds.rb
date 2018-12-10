100.times do
  Item.create(
    name: Faker::Commerce.item_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department: Faker::Commerce.department
  )
end
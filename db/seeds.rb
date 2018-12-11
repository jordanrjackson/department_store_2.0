10.times do
  Department.create(
    name: Faker::Commerce.department,
    description: Faker::Lorem.sentence,
  )
end
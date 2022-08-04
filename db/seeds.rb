puts "📃 Seeding data..."
# Artist.create(name:  'John', email: 'john@example.com', image: 'http://example.com')
# Artist.create(name:  'Jane', email: 'jane@example.com', image:'http://example.com')
# Artist.create(name:  'janet', email: 'janet@example.com', image: 'http://example.com')
# Artist.create(name:  'fred', email: 'fred@example.com', image: 'http://example.com')


Item.create(title: 'Canvas', image_url: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg', description:  'a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.', artist_id: 6)

Item.create(title: 'Memoir', image_url: 'https://www.artmajeur.com/medias/standard/a/r/artdenoe/artwork/10453216_mg-7683.jpg', description:  ' and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the', artist_id: 5)

Item.create(title: 'Book', image_url: 'https://i.pinimg.com/originals/d9/1d/c4/d91dc41af4952c8432f66ead19890447.png', description:  'and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the', artist_id: 4)

# Item.create(title: 'The Type specimen book', image_url:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAp9ZANM1U5ssaNn8uGx-ohxWNv3-HtmEc1_0RtNcUHjG5FODJCiDzIM4bExlrT1_5YU&usqp=CAU', description:  'and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the', artist_id: rand(1..8))

# Exhibition.create(title: "NAIBO art expo : Art for global impact", venue: "Franchaise’  arena", date: "August 6-10, 2022", time: "9am - 5pm daily" )

# Exhibition.create(title: "kreateFEST expo : Art for global impact", venue: "Franchaise’  arena", date: "August 26-30, 2022", time: "5pm - 9pm daily" )

# Exhibition.create(title: "AFROFUTURISM expo : Art for global impact", venue: "Franchaise’  arena", date: "September 6-10, 2022", time: "8am - 6pm daily" )

puts "✅ Done seeding"
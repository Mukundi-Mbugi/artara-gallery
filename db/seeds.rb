puts "📃 Seeding data..."
# Artist.create(name:  'John', email: 'john@example.com', image: 'http://example.com')
# Artist.create(name:  'Jane', email: 'jane@example.com', image:'http://example.com')
# Artist.create(name:  'janet', email: 'janet@example.com', image: 'http://example.com')
# Artist.create(name:  'fred', email: 'fred@example.com', image: 'http://example.com')


Item.create(title: 'Canvas', image_url: 'https://picsum.photos/200', description:  'a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.')

Item.create(title: 'Memoir', image_url: 'https://picsum.photos/200', description:  ' and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the')

Item.create(title: 'Book', image_url: 'https://picsum.photos/200', description:  'and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the')

Item.create(title: 'The Type specimen book', image_url:  'https://picsum.photos/200', description:  'and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the')

puts "✅ Done seeding"
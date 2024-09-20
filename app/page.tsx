import { Container } from '@/components/shared/container'
import { Filter } from '@/components/shared/filters'

import ProductsGroupList from '@/components/shared/products-group-list'

import { Title } from '@/components/shared/title'

import TopBar from '@/components/shared/top-bar'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title className="font-extrabold" size="lg" text="Все пиццы" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filter />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пицца"
                categoryId={1}
                products={[
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                ]}
              />
              <ProductsGroupList
                title="Завтрак"
                categoryId={2}
                products={[
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                  {
                    id: 1,
                    name: 'Пицца 1',
                    price: 100,
                    imgUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

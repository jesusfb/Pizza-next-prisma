'use client'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { Input } from '../ui/input'
import { RangeSlider } from '../ui/range-slider'
import { CheckoxFiltersGroup } from './checkbox-filters-group'
import { Title } from './title'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

interface Props {
  className?: string
}

interface PriceProps {
  priceFrom: number
  priceTo: number
}

export const Filter = ({ className }: Props) => {
  const { ingredients, loading, selectedIngredients, onAddId } = useFilterIngredients()

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))

  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  })

  const items = ingredients.map(ingredient => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }))

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...prices, [name]: value })
    // setPrice(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    console.log()
  }, [pizzaTypes, sizes, prices, selectedIngredients])

  return (
    <div className={className}>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />
      <CheckoxFiltersGroup
        name="pizzaTypes"
        title="Тип теста"
        className="mb-5"
        selectedIngredients={pizzaTypes}
        onClickCheckbox={togglePizzaTypes}
        items={[
          { text: 'Тонкое', value: '1' },

          { text: 'Традиционное', value: '2' },
        ]}
      />
      <CheckoxFiltersGroup
        name="sizes"
        title="Размеры"
        className="mb-5"
        selectedIngredients={sizes}
        onClickCheckbox={toggleSizes}
        items={[
          { text: '20cm', value: '20cm' },
          { text: '30cm', value: '30cm' },
          { text: '40cm', value: '40cm' },
        ]}
      />

      <div className="mt-5 border-y border-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            step={10}
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={e => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            step={10}
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={e => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([from, to]) => setPrice({ priceFrom: from, priceTo: to })}
        />
      </div>

      <CheckoxFiltersGroup
        name="ingredients"
        title="Ингредиенты"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 5)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIngredients={selectedIngredients}
      />
    </div>
  )
}

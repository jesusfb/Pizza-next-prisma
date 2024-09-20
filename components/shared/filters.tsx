'use client'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { Input } from '../ui/input'
import { RangeSlider } from '../ui/range-slider'
import { CheckoxFiltersGroup } from './checkbox-filters-group'
import { FilterCheckbox } from './filter-checkbox'
import { Title } from './title'
import { useState } from 'react'

interface Props {
  className?: string
}

interface PriceProps {
  priceFrom: number
  priceTo: number
}

export const Filter = ({ className }: Props) => {
  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients()
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

  return (
    <div className={className}>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="category" text="Можно собирать" value="category" />
        <FilterCheckbox name="categry" text="Новинки" value="category" />
      </div>
      <div className="mt-5 border-y border-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={e => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
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
        selectedIds={selectedIds}
      />
    </div>
  )
}

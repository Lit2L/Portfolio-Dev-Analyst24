'use client'

import { GradientPicker } from './PickerComponent'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Info } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const TextGradientGenerator = () => {
  const [text, setText] = useState('Hello World!')
  const [background, setBackground] = useState(
    'linear-gradient(to top left,#ff75c3,#ffa647,#ffe83f,#9fff5b,#70e2ff,#cd93ff)'
  )
  return (
    <div>
      <div className='p-4 border-2 border-white/20 hover:border-white/50 transition rounded-md mb-12 bg-gradient-to-br from-gray-900 to-gray-950'>
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
          <GradientPicker
            className='w-full truncate'
            background={background}
            setBackground={setBackground}
          />
          <Input
            id='text'
            placeholder='text'
            value={text}
            onChange={e => setText(e.currentTarget.value)}
          />
        </div>
        <div className='text-center w-full py-8'>
          <div
            className='inline-block text-5xl uppercase font-black !bg-clip-text text-transparent !bg-cover !bg-center transition-all'
            style={{ background }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  )
}
// https://gradient.page/css/ui-gradients/from-ice-to-fire

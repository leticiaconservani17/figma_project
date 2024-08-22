import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MenuItem = {
  name: string
  price: number
  description: string
  productImage: string
  serves: string
  itemAbout: string
  uniqueId: number
  restaurantId: number
}

type CartState = {
  items: MenuItem[]
  isOpen: boolean
  delivery: boolean
  payment: boolean
  conclude: boolean
  billingDetails: BillingDetails
  paymentDetails: PaymentDetails
}

type BillingDetails = {
  name: string
  adress: string
  city: string
  CEP: string
  number: string
  complement?: string
}

type PaymentDetails = {
  card: {
    owner: string
    name: string
    number: string
    expires: {
      month: number
      year: number
    }
    code: number
  }
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  delivery: false,
  payment: false,
  conclude: false,
  billingDetails: {
    name: '',
    adress: '',
    city: '',
    CEP: '',
    number: '',
    complement: ''
  },
  paymentDetails: {
    card: {
      owner: '',
      name: '',
      number: '',
      expires: { month: 0, year: 0 },
      code: 0
    }
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<MenuItem, 'uniqueId'>>) => {
      const newItem: MenuItem = {
        ...action.payload,
        uniqueId: Date.now()
      }
      state.items.push(newItem)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.uniqueId !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    delivery: (state, action: PayloadAction<boolean>) => {
      state.delivery = action.payload
    },
    payment: (state, action: PayloadAction<boolean>) => {
      state.payment = action.payload
    },
    conclude: (state, action: PayloadAction<boolean>) => {
      state.conclude = action.payload
    },
    setBillingDetails: (
      state,
      action: PayloadAction<Partial<BillingDetails>>
    ) => {
      state.billingDetails = { ...state.billingDetails, ...action.payload }
    },
    setPaymentDetails: (state, action: PayloadAction<PaymentDetails>) => {
      state.paymentDetails = { ...state.paymentDetails, ...action.payload }
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  delivery,
  payment,
  conclude,
  setBillingDetails,
  setPaymentDetails
} = cartSlice.actions
export default cartSlice.reducer

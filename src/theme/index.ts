import merge from 'lodash.merge'
import preset from '@rebass/preset'

export default merge(preset, {
  colors: {
    primary: '#347AF0',
    green: '#75BF72',
    red: '#DF5060',
    yellow: '#FDB32A',
    midnightBlue: '#0D1F3C',
    white: '#ffffff',
    gray: '#B5BBC9',
    darkGray: '#3D4C63',
    lightgray: '#CFD2D8',
    darkBlue: '#3D4C63',
    lightBlue: '#EDF1F9'
  },
  fontWeights: {
    semi: 600
  },
  forms: {
    input: {
      py: 1,
      px: 1,
      borderRadius: 0,
      border: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'lightgray',
      color: 'darkBlue',
      caretColor: '#347AF0',
      lineHeight: '24px',

      '::placeholder': {
        color: 'midnightBlue'
      },

      '&:focus, &:active': {
        outline: 0,
        borderBottomColor: 'primary'
      },

      '&:disabled': {
        color: 'lightgray'
      }
    },
    label: {
      color: 'gray',
      px: 1
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      py: 3,
      px: 4,
      minWidth: 120,
      borderRadius: 32,
      fontWeight: 'semi',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary'
    },
    ghost: {
      variant: 'buttons.primary',
      bg: 'white',
      color: 'primary'
    },
    white: {
      variant: 'buttons.primary',
      bg: 'white',
      color: 'primary',
      borderColor: 'white'
    },
    positive: {
      variant: 'buttons.primary',
      bg: 'green',
      color: 'white',
      borderColor: 'green'
    },
    negative: {
      variant: 'buttons.positive',
      bg: 'red',
      borderColor: 'red'
    }
  }
})

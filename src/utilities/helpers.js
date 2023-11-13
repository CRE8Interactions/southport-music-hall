// currency changes to what the host is set to
// rounds decimals to 2
// adds comma separator
export const formatCurrency = (num) => {
    return parseFloat(num ? num : 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// format full date 
// display full date with start and end time and/or time only
// assumed an event is one day
export const formatDateTime = (date, formatter) => {
    switch (formatter) {
        case 'timeOnly':
            return date.format('h:mma')

        default:
            return date.format('dddd, MMM D | h:mma')
    }
}

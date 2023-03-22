const friends = {
  title: 'Friends',
  people: '271',
  static: '+0,7%',
  photo: require('@/statistics/assets/img/arrowUp.svg')
} 
const visitors = {
  title: 'Visitors',
  people: '69',
  static: '-1,7%',
  photo: require('@/statistics/assets/img/arrowDown.svg')
} 
const followers = {
  title: 'Followers',
  people: '288',
  static: '+1%',
  photo: require('@/statistics/assets/img/arrowUp.svg')
} 
export const guestsCard = [friends, visitors, followers]
export const dataDevice = {
  labels: ['Desktop', 'Mobile views'],
  datasets: [
    {
      backgroundColor: ['#E786D7', '#7F7FD5'],
      data: [80, 20]
    }
  ]
}
export const optionsDevice = {
  responsive: true,
  maintainAspectRatio: false
}
export const dataGender = {
  labels: [
    '< 18',
    '18-21',
    '21-24',
    '24-27',
    '27-30',
    '30-35',
    '35-40',
    '> 40',
  ],
  datasets: [
    {
      label: 'women',
      backgroundColor: '#E786D7',
      data: [10, 10, 10, 40, 30, 10, 5, 5, 40, 20, 12, 11]
    },
    {
      label: 'men',
      backgroundColor: '#7F7FD5',
      data: [10, 20, 20, 30, 10, 10, 5, 30, 40, 20, 12, 11]
    }
  ]
}
export const optionsGender= {
  responsive: true,
  maintainAspectRatio: false
}

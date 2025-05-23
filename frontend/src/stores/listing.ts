import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Listing {
  images: string[]
  title: string
  price: number
  description: string
}

export const useListingStore = defineStore('listing', () => {
  const listing = ref<Listing>({ images: [], title: '', price: 0, description: '' })
  const listingImages = ref<string[]>([])
  const listingTitle = ref('')
  const listingPrice = ref(0)
  const listingDescription = ref('')

  function setListingImages(images: string[]) {
    listingImages.value = images
  }

  function setListingTitle(title: string) {
    listingTitle.value = title
  }

  function setListingPrice(price: number) {
    listingPrice.value = price
  }

  function setListingDescription(description: string) {
    listingDescription.value = description
  }

  function getListing() {
    listing.value.images = listingImages.value
    listing.value.title = listingTitle.value
    listing.value.price = listingPrice.value
    listing.value.description = listingDescription.value
    return listing
  }
  return { getListing, setListingImages, setListingTitle, setListingPrice, setListingDescription }
})

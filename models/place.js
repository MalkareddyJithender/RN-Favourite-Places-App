// blueprint of place
class Place {
  constructor(title, imageUri, location) {
    const id = new Date().getTime();
    this.id = id;
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = {
      lat: location.lat,
      lng: location.lng,
    };
  }
}

export default Place;

// blueprint of place
class Place {
  constructor(title, imageUri, address, location) {
    const id = new Date().getTime();
    this.id = id;
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
  }
}

export default Place;

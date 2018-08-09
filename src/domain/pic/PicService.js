export default class PicService {
  constructor(resource) {
    this._resource = resource('v1/fotos{/id}')
  }

  list() {
    return this._resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Pictures not found.')
      })
  }

  register(foto) {
    if (foto._id) {
      return this._resource
        .update({id: foto._id}, foto) // $http.put

    } else {
      return this._resource
      .save(foto) // $http.post
    }
  }

  removed(id) {
    return this._resource
      .delete({ id })
      .then(null, err => {
        console.log(err);
        throw new Error('Can not remove the picture')
      })
  }

  search(id) {
    return this._resource
      .get({id})
      .then(res => res.json())
  }
}

## Create a Restaurant and its Menu using React
    * what type of restaurant?
    * what meal? Breakfast, lunch, dinner, desserts?
    * need prices
    * need an address for the restaurant
    * hours of operation
    * need atleat 15 menu items
    * menu will need its own display (bootstrap)
    * manage react component state

---

    <div id="accordion">
      <div className="card text-primary">
        <div className="card-header bg-primary" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Apps
            </button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <ul className="list-unstyled">

              {this.state.Lunch.map(Lunch =>
                <div>
                  <h1>{Lunch.description.split(" with ")[0]}</h1>
                  <li>{Lunch.description}</li>
                  <p>{Lunch.description.length}$</p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
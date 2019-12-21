const inventryData = {
    headers : [
        "Items","Required qty","Vender 1","Vender 2","Received qty","Status","Bakery","Italian","Indian"
    ],
    headers_chef : [
        "Items","Required qty", "Recived qty","Status"
    ],
    data : {
        "item001" :  {
            id : "item001",
            group : "Floor",
            name : "Wheat",
            required_quantity : {
                unit : "kg",
                qty : 20
            },
            vendor_1 : {
                unit : "kg",
                qty : 10
            },
            vendor_2 : {
                unit : "kg",
                qty : 10
            },
            category : {
                bakery : 0,
                italian : 1,
                indian : 1
            }

        },
        "item002" : {
            id : "item002",
            group : "Floor",
            name : "Rice",
            required_quantity : {
                unit : "kg",
                qty : 20
            },
            vendor_1 : {
                unit : "kg",
                qty : 0
            },
            vendor_2 : {
                unit : "kg",
                qty : 10
            },
            category : {
                bakery : 0,
                italian : 1,
                indian : 1
            }

        },
        "item003" :  {
            id : "item003",
            group : "Floor",
            name : "Multigrain",
            required_quantity : {
                unit : "kg",
                qty : 5
            },
            vendor_1 : {
                unit : "kg",
                qty : 0
            },
            vendor_2 : {
                unit : "kg",
                qty : 1
            },
            category : {
                bakery : 0,
                italian : 1,
                indian : 0
            }

        },
        "item004" :  {
            id : "item004",
            group : "Fats",
            name : "Butter",
            required_quantity : {
                unit : "kg",
                qty : 5
            },
            vendor_1 : {
                unit : "kg",
                qty : 2
            },
            vendor_2 : {
                unit : "kg",
                qty : 1
            },
            category : {
                bakery : 1,
                italian : 1,
                indian : 0
            }

        },
        "item005" : {
            id : "item005",
            group : "Fats",
            name : "Olive",
            required_quantity : {
                unit : "ltr",
                qty : 3
            },
            vendor_1 : {
                unit : "ltr",
                qty : 2
            },
            vendor_2 : {
                unit : "ltr",
                qty : 0
            },
            category : {
                bakery : 1,
                italian : 1,
                indian : 0
            }

        },
        "item006" : {
            id : "item006",
            group : "Fats",
            name : "Mustered",
            required_quantity : {
                unit : "ltr",
                qty : 8
            },
            vendor_1 : {
                unit : "ltr",
                qty : 0
            },
            vendor_2 : {
                unit : "ltr",
                qty : 6
            },
            category : {
                bakery : 0,
                italian : 0,
                indian : 1
            }

        },
        "item007" : {
            id : "item007",
            group : "Fats",
            name : "Vegetable",
            required_quantity : {
                unit : "ltr",
                qty : 0
            },
            vendor_1 : {
                unit : "ltr",
                qty : 0
            },
            vendor_2 : {
                unit : "ltr",
                qty : 0
            },
            category : {
                bakery : 0,
                italian : 0,
                indian : 1
            }
        },
        "item008" : {
            id : "item008",
            group : "Vegetables",
            name : "Mashrum",
            required_quantity : {
                unit : "kg",
                qty : 5
            },
            vendor_1 : {
                unit : "kg",
                qty : 2
            },
            vendor_2 : {
                unit : "kg",
                qty : 3
            },
            category : {
                bakery : 0,
                italian : 1,
                indian : 0
            }
        },
        "item009" : {
            id : "item009",
            group : "Vegetables",
            name : "Baby Corn",
            required_quantity : {
                unit : "kg",
                qty : 5
            },
            vendor_1 : {
                unit : "kg",
                qty : 3
            },
            vendor_2 : {
                unit : "kg",
                qty : 2
            },
            category : {
                bakery : 0,
                italian : 1,
                indian : 0
            }
        },
        "item010" : {
            id : "item010",
            group : "Vegetables",
            name : "Onions",
            required_quantity : {
                unit : "kg",
                qty : 15
            },
            vendor_1 : {
                unit : "kg",
                qty : 12
            },
            vendor_2 : {
                unit : "kg",
                qty : 0
            },
            category : {
                bakery : 0,
                italian : 1,
                indian : 1
            }
        },
        "item011" : {
            id : "item011",
            group : "Vegetables",
            name : "Capcicum",
            required_quantity : {
                unit : "kg",
                qty : 5
            },
            vendor_1 : {
                unit : "kg",
                qty : 2
            },
            vendor_2 : {
                unit : "kg",
                qty : 1
            },
            category : {
                bakery : 0,
                italian : 1,
                indian : 0
            }
        },

        "item012" : {
            id : "item012",
            group : "Add ons",
            name : "Salt",
            required_quantity : {
                unit : "kg",
                qty : 5
            },
            vendor_1 : {
                unit : "kg",
                qty : 2
            },
            vendor_2 : {
                unit : "kg",
                qty : 3
            },
            category : {
                bakery : 1,
                italian : 1,
                indian : 1
            }
        },

        "item013" : {
            id : "item013",
            group : "Add ons",
            name : "Olives",
            required_quantity : {
                unit : "kg",
                qty : 5
            },
            vendor_1 : {
                unit : "kg",
                qty : 3
            },
            vendor_2 : {
                unit : "kg",
                qty : 3
            },
            category : {
                bakery : 1,
                italian : 0,
                indian : 0
            }
        },
        "item014" : {
            id : "item014",
            group : "Add ons",
            name : "Sugar",
            required_quantity : {
                unit : "kg",
                qty : 15
            },
            vendor_1 : {
                unit : "kg",
                qty : 12
            },
            vendor_2 : {
                unit : "kg",
                qty : 0
            },
            category : {
                bakery : 1,
                italian : 0,
                indian : 1
            }
        },
        "item015" : {
            id : "item015",
            group : "Add ons",
            name : "Vanilla",
            required_quantity : {
                unit : "kg",
                qty : 5
            },
            vendor_1 : {
                unit : "kg",
                qty : 2
            },
            vendor_2 : {
                unit : "kg",
                qty : 1
            },
            category : {
                bakery : 1,
                italian : 0,
                indian : 0
            }
        }
    }
}

const getGroupedData = (data, role) => {
    const getStatus = (a, b, c) => (a <= (b + c)) ? "OK" : "Insufficient";
    const getCategory = n => n ? "Y" : "N";
    const getQuantity = q => [q.qty, q.unit].join(" ")
    const newData = {};
    Object.keys(data).forEach(item => {
        item = data[item];
        let t = {};
        let group = item.group;
        t.id = item.id;
        t.name = item.name;
        t.required_quantity =  getQuantity(item.required_quantity);
        if (role === "manager") {
            t.vendor_1 = getQuantity(item.vendor_1);
            t.vendor_2 = getQuantity(item.vendor_2);
        }
        
        t.recieved_quantity = [item.vendor_1.qty + item.vendor_2.qty, item.required_quantity.unit].join(" ");
        t.status = getStatus(item.required_quantity.qty, item.vendor_1.qty, item.vendor_2.qty);
        
        if (role === "manager") {
            Object.keys(item.category).forEach(cat => {
                t[cat] = getCategory(item.category[cat]);
            });
        }
        

        if (role === "manager") {
            if (typeof newData[group] === "undefined") {
                newData[group] = [];
            }
            newData[group].push({name : group, data : t});
        } else {
            if (item.category[role] === 1) {
                if (typeof newData[group] === "undefined") {
                    newData[group] = [];
                }
                newData[group].push({name : group, data : t});
            }
        }
       
    });
    return newData;
}

export {inventryData, getGroupedData};



import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductGroupList } from "@/components/shared";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px] border border-red-700">
          
         
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList 
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 2,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 3,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 4,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 5,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 6,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                ]} 
                categoryId={1}              
              />
              <ProductGroupList 
                title="Комбо"
                categoryId={2}    
                items={[
                  {
                    id: 7,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 8,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 9,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 10,
                    name: "Сырный цыпленок",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                ]}           
              />
            </div>  
          </div>
        </div>
      </Container>
    </>
  );
};

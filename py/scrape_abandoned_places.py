import requests
from bs4 import BeautifulSoup
import json

# Function to scrape data
def scrape_abandoned_places():
    url = 'https://example.com/abandoned-places'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    places = []
    for place in soup.find_all('div', class_='place'):
        name = place.find('h2').text
        address = place.find('p', class_='address').text
        city = place.find('p', class_='city').text
        state = place.find('p', class_='state').text
        status = place.find('p', class_='status').text
        notes = place.find('p', class_='notes').text
        category = place.find('p', class_='category').text

        places.append({
            'name': name,
            'address': address,
            'city': city,
            'state': state,
            'status': status,
            'notes': notes,
            'category': category
        })

    return places

# Function to save data to JSON
def save_to_json(data, filename='spots.json'):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

# Main function
def main():
    places = scrape_abandoned_places()
    categorized_places = {
        'hospitals': [],
        'industrial': [],
        'educational': [],
        'hospitality': [],
        'government': []
    }

    for place in places:
        if place['category'] == 'hospitals':
            categorized_places['hospitals'].append(place)
        elif place['category'] == 'industrial':
            categorized_places['industrial'].append(place)
        elif place['category'] == 'educational':
            categorized_places['educational'].append(place)
        elif place['category'] == 'hospitality':
            categorized_places['hospitality'].append(place)
        elif place['category'] == 'government':
            categorized_places['government'].append(place)

    save_to_json(categorized_places)

if __name__ == '__main__':
    main()

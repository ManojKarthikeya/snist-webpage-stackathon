import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import snimage from "./Images";
// import Photo from "./SortablePhoto";
import { SortableContainer }from "react-sortable-hoc";
import	{SortableElement } from "react-sortable-hoc";
import { arrayMove } from "react-sortable-hoc";

// const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items, onClick }) => (
	<Gallery  photos={items} onClick={onClick} />
  ));


export default function GalleryComponent() {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);
	const [items, setItems] = useState(snimage);
	const onSortEnd = ({ oldIndex, newIndex }) => {
	  setItems(arrayMove(items, oldIndex, newIndex));
	};
	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);
	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};
	return (
		<div>
			<SortableGallery items={items} onSortEnd={onSortEnd}  onClick={openLightbox} axis={"xy"} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel 
							currentIndex={currentImage}
							views={snimage.map((x) => ({
								...x,
								srcset: x.srcSet,
								caption: x.title,
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	);
}
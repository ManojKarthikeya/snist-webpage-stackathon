import React, { useState,useCallback } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Sorted-Gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { arrayMove } from "react-sortable-hoc";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./photos";

export default function SortMain() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));


  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const SortablePhoto = SortableElement(item => <Photo {...item} />);
  const SortableGallery = SortableContainer(({ items }) => (
    <Gallery onClick={openLightbox} photos={items} renderImage={props => <SortablePhoto {...props} />} />
  ));

  return (
    <div style={{minWidth: '90%'}}>
      <SortableGallery onClick={openLightbox} items={items} onSortEnd={onSortEnd} axis={"xy"} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}


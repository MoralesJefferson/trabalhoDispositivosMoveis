import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const PaginationNumbers = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const visiblePages = 3;
  let startPage = 1;
  let endPage = Math.min(totalPages, visiblePages);

  if (currentPage > Math.floor(visiblePages / 2)) {
    startPage = currentPage - Math.floor(visiblePages / 2);
    endPage = currentPage + Math.floor(visiblePages / 2);
  }

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  return (
    <View style={styles.paginationNumbers}>
      {pages.map((page) => (
        <TouchableOpacity
          key={page}
          style={[
            styles.pageNumber,
            currentPage === page && styles.activePageNumber,
          ]}
          onPress={() => onPageChange(page)}
        >
          <Text>{page}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationNumbers: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  pageNumber: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginRight: 5,
  },
  activePageNumber: {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    color: "#fff",
  },
});

export default PaginationNumbers;

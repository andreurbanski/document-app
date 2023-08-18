<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar: Document List -->
      <div class="col-md-3 bg-dark sidebar">
        <h1 class="text-light mb-4">List of Documents</h1>
        <ul class="list-group">
          <li
            v-for="document in documents"
            :key="document.id"
            @click="selectDocument(document)"
            :class="{ active: selectedDocument && selectedDocument.id === document.id }"
            class="list-group-item list-group-item-action bg-dark text-light"
          >
            {{ document.name }}
          </li>
        </ul>
      </div>

      <!-- Content: Document Details -->
      <div class="col-md-9 content">
        <div class="document-details p-4">
          <h2 v-if="selectedDocument">{{ selectedDocument.name }} Details</h2>
          <div class="card" v-if="selectedDocument">
            <div class="card-body">
              <ul class="list-unstyled">
                <li v-for="(value, key) in selectedDocument.values" :key="key">
                  <strong>{{ key }}:</strong> {{ value }}
                </li>
              </ul>
            </div>
          </div>
          <div v-else>
            <p>Select a document from the list to view its details.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { listDocuments } from '@/components/api.js'; // Import your API methods

export default {
  data() {
    return {
      documents: [],
      selectedDocument: null
    };
  },
  created() {
    this.fetchDocuments();
  },
  methods: {
    fetchDocuments() {
      listDocuments()
        .then(response => {
          this.documents = response.data;
        })
        .catch(error => {
          console.error('Error fetching documents:', error);
        });
    },
    selectDocument(document) {
      this.selectedDocument = document;
    }
  }
};
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  padding: 20px;
}

.bg-dark {
  background-color: #343a40 !important;
}

.text-light {
  color: #ffffff !important;
}

.list-group-item.active {
  background-color: #007bff;
  color: white;
}

.content {
  padding: 20px;
}

.document-details {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
}
</style>

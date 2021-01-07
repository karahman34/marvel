<template>
  <div>
    <v-card class="chara-wrapper">
      <!-- Thumbnail & name & description -->
      <v-row no-gutters>
        <!-- Thumbnail -->
        <v-col cols="6">
          <v-img
            class="chara-thumbnail"
            min-height="200px"
            :src="`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`"
          />
        </v-col>

        <!-- Details -->
        <v-col
          cols="6"
          class="chara-details"
        >
          <div>
            <p class="chara-name">
              {{ character.name }}
            </p>

            <hr class="my-1">

            <p class="chara-description">
              <template v-if="character.description.length >= maxCharacters">
                <span>
                  {{ showMore
                    ? character.description
                    : character.description.slice(0, maxCharacters)
                  }}
                </span>

                <span
                  v-show="!showMore"
                  class="show-more"
                  @click="showMore = true"
                >
                  Show more..
                </span>
              </template>

              <template v-else>
                {{ character.description|| 'Has no description.' }}
              </template>
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Panels -->
      <v-expansion-panels accordion>
        <v-expansion-panel
          v-for="panel in panels"
          :key="panel.text"
        >
          <v-expansion-panel-header class="font-weight-medium">
            {{ panel.text }} ({{ panel.items.length }})
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p
              v-for="(data, i) in panel.items"
              :key="i"
              class="my-1"
            >
              {{ data }}
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      maxCharacters: 117,
      showMore: false,
      panels: [],
      focusComic: null
    }
  },

  created() {
    this.setSeries()
    this.setComics()
  },

  methods: {
    setComics() {
      const comics = {
        text: 'Comics',
        items: []
      }
      this.character.comics.items.map(item => comics.items.push(item.name))

      this.panels.push(comics)
    },
    setSeries() {
      const series = {
        text: 'Series',
        items: []
      }
      this.character.series.items.map(item => series.items.push(item.name))
      this.panels.push(series)
    }
  }
}
</script>

<style lang="scss" scoped>
  .chara-wrapper {
    .chara-details {
      padding: 5px 10px;

      .chara-name {
        margin: 0;
        font-weight: 500;
        font-size: 18px;
      }

      .chara-description {
        margin: 0;

        .show-more {
          cursor: pointer;
          font-weight: 700;
        }
      }
    }
  }
</style>